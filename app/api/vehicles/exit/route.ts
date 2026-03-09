import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request) {
 try {
 const { vehicle_id, exit_time, amount } = await request.json();
 const { data, error } = await supabase
 .from('vehicles')
 .update({ exit_time })
 .eq('id', vehicle_id);
 if (error) throw error;
 const { data: transaction, error: transError } = await supabase
 .from('transactions')
 .insert([{ vehicle_id, amount, transaction_type: 'out' }]);
 if (transError) throw transError;
 return NextResponse.json({ message: 'Vehicle exit recorded and payment processed', data }, { status: 200 });
 } catch (error) {
 return NextResponse.json({ error: error.message }, { status: 400 });
 }
}