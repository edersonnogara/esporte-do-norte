-- Extensões
create extension if not exists "pgcrypto";

-- Organizations
create table organizations (
    id uuid primary key default gen_random_uuid(),

    name varchar(150) not null,

    slug varchar(150) unique not null,

    document varchar(20),

    email varchar(150),

    phone varchar(20),

    logo_url text,

    primary_color varchar(10),

    secondary_color varchar(10),

    city varchar(100),

    state varchar(2),

    active boolean default true,

    created_at timestamptz default now(),

    updated_at timestamptz default now()
);