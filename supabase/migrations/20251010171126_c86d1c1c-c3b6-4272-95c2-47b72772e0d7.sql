-- Add email validation function
CREATE OR REPLACE FUNCTION public.validate_email(email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND length(email) <= 255;
END;
$$;

-- Add database constraints for recipient_email
ALTER TABLE public.transfers
ADD CONSTRAINT recipient_email_format 
CHECK (recipient_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

ALTER TABLE public.transfers
ADD CONSTRAINT recipient_email_length
CHECK (length(recipient_email) <= 255);

-- Add RLS policy for email validation on insert
CREATE POLICY "Validate recipient email format on insert"
ON public.transfers
FOR INSERT
TO authenticated
WITH CHECK (public.validate_email(recipient_email));