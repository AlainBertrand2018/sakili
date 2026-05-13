-- Initial SAKILI Schema
-- Continental AI Ecosystem Infrastructure

-- Profiles (extends auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'member' CHECK (role IN ('member', 'verified_member', 'moderator', 'admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI Capabilities (Taxonomy)
CREATE TABLE ai_capabilities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Industry Sectors (Taxonomy)
CREATE TABLE sectors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Organizations
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  country TEXT NOT NULL,
  city TEXT,
  description TEXT NOT NULL,
  website_url TEXT,
  team_size TEXT,
  contact_email TEXT NOT NULL,
  collaboration_ready BOOLEAN DEFAULT TRUE,
  maturity_level TEXT CHECK (maturity_level IN ('idea', 'startup', 'sme', 'enterprise', 'research_lab', 'university', 'government')),
  verification_status TEXT DEFAULT 'pending' CHECK (verification_status IN ('pending', 'basic', 'verified', 'institutional', 'partner')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Organization Capabilities (Many-to-Many)
CREATE TABLE organization_capabilities (
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  capability_id UUID REFERENCES ai_capabilities(id) ON DELETE CASCADE,
  PRIMARY KEY (organization_id, capability_id)
);

-- Organization Sectors (Many-to-Many)
CREATE TABLE organization_sectors (
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  sector_id UUID REFERENCES sectors(id) ON DELETE CASCADE,
  PRIMARY KEY (organization_id, sector_id)
);

-- Collaborations (Handshakes)
CREATE TABLE collaborations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  receiver_org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'completed')),
  intent_type TEXT NOT NULL, -- e.g., 'partnership', 'research', 'procurement'
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Verifications
CREATE TABLE verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  verifier_id UUID REFERENCES profiles(id),
  level TEXT CHECK (level IN ('basic', 'verified', 'institutional', 'partner')),
  notes TEXT,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) - DISABLED FOR TESTING
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE organizations DISABLE ROW LEVEL SECURITY;
ALTER TABLE collaborations DISABLE ROW LEVEL SECURITY;
ALTER TABLE ai_capabilities DISABLE ROW LEVEL SECURITY;
ALTER TABLE sectors DISABLE ROW LEVEL SECURITY;
ALTER TABLE organization_capabilities DISABLE ROW LEVEL SECURITY;
ALTER TABLE organization_sectors DISABLE ROW LEVEL SECURITY;
ALTER TABLE verifications DISABLE ROW LEVEL SECURITY;

-- Allow all operations for public testing
CREATE POLICY "Allow all on profiles" ON profiles FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on organizations" ON organizations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on collaborations" ON collaborations FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on ai_capabilities" ON ai_capabilities FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on sectors" ON sectors FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on organization_capabilities" ON organization_capabilities FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on organization_sectors" ON organization_sectors FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on verifications" ON verifications FOR ALL USING (true) WITH CHECK (true);
