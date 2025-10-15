-- Allow recipients to view transfers sent to their email
CREATE POLICY "Recipients can view transfers sent to them"
ON public.transfers
FOR SELECT
TO authenticated
USING (
  auth.jwt() ->> 'email' = recipient_email
);

-- Allow recipients to update the status of transfers sent to them (for marking as downloaded)
CREATE POLICY "Recipients can update transfer status"
ON public.transfers
FOR UPDATE
TO authenticated
USING (
  auth.jwt() ->> 'email' = recipient_email
)
WITH CHECK (
  auth.jwt() ->> 'email' = recipient_email
);