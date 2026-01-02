import { LoaderIcon, Sparkles } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-6 animate-fade-in-up">
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-r from-primary to-accent blur-2xl opacity-30 animate-pulse-soft" />
        <LoaderIcon className="size-12 text-primary animate-spin relative" />
      </div>
      <div className="space-y-2 text-center">
        <p className='text-lg font-semibold text-base-content flex items-center justify-center gap-2'>
          <Sparkles className="size-4 text-accent animate-pulse-soft" />
          Loading
          <Sparkles className="size-4 text-accent animate-pulse-soft" />
        </p>
        <p className='text-sm text-base-content/50'>Please wait a moment...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
