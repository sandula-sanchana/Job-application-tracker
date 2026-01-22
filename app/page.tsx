import {Button} from "@/components/ui/button";


export default function Home() {
  return (
   <>
       <div className="flex min-h-screen flex-col bg-white">
          <main className='flex'>
              <section className='container mx-auto px-4 py-32 text-6xl'>
                 <div>
                     <h1 className='text-center'>
                         the best way to track your job application
                     </h1>
                     <p className='text-2xl text-center m-10'>
                         Manage your job search in one place
                     </p>
                     <div className='flex justify-center py-40 items-center gap-7 '>
                         <Button className=''> click me</Button>
                        <p className='text-sm text-muted-foreground'> try it for free, no credit card required</p>
                     </div>
                 </div>

              </section>
          </main>
       </div>
   </>
  );
}
