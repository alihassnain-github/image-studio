import SignupForm from '@/components/forms/signup-form';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background with gradient */}
      <div 
        className="flex-1 flex items-center justify-center p-4"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="w-full max-w-md">
          
          {/* Signup Form */}
          <SignupForm />
          
          {/* Back to Home */}
          <div className="text-center mt-6">
            <a 
              href="/" 
              className="text-white/80 hover:text-white transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
