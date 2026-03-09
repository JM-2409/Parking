import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
    try {
        const { vehicle_id, entry_time } = await request.json();
        const { data, error } = await supabase
            .from('vehicles')
            .insert([{ vehicle_id, entry_time }]);

        if (error) throw error;

        return NextResponse.json({ message: 'Vehicle entry recorded', data }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}