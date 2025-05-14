CREATE TABLE IF NOT EXISTS public.user_data
(
    user_id character varying(100) PRIMARY KEY  NOT NULL,
    user_name character varying(100) UNIQUE  NOT NULL,
    user_email character varying(100) UNIQUE NOT NULL,
    user_pass character varying(100) UNIQUE NOT NULL,
	reward_points NUMERIC(10,2) NOT NULL DEFAULT 10,
    badge character varying(100) NOT NULL
    
)