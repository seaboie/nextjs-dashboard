import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (


    <main className="center-point">
      <div className='max-w-[400px] w-full h-30 bg-blue-500 p-4 rounded-md'>
        <AcmeLogo />

        <LoginForm />
      </div>

    </main>


    // <main className="center-point">

    //   <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
    //     <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
    //       <div className="w-32 text-white md:w-36">
    //         <AcmeLogo />
    //       </div>
    //     </div>
    //     <LoginForm />
    //   </div>

    // </main>

  );
}