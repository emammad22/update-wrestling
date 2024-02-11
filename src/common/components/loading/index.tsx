import { Loader2 } from "lucide-react";

export default function Loading () {
  return (
    <div>   
      <Loader2 className='absolute m-auto animate-spin inset-0 size-8'/>
    </div>
  );
}
