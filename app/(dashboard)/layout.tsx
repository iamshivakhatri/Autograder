import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";


export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { storeId: string }
}) {

 
 
    return (
        <>
        <div>
            
            <Navbar />
        </div>
        {children}
        </>
    );
  
    
}