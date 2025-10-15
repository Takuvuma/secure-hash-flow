-- Add access token column to transfers table for direct recipient access
ALTER TABLE public.transfers 
ADD COLUMN access_token TEXT UNIQUE DEFAULT gen_random_uuid()::TEXT;

-- Create index for faster token lookups
CREATE INDEX idx_transfers_access_token ON public.transfers(access_token);

-- Add expiry check for token access
COMMENT ON COLUMN public.transfers.access_token IS 'Unique token that allows recipients to access files without authentication';