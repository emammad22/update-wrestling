import { Frown, ServerCrash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Error() {

    const navigate = useNavigate();

    return (
        <div className="absolute flex items-center justify-center inset-0 m-auto size-fit gap-4">
            <ServerCrash className="text-red-300 size-[200px]" />
            <div className="error-actions flex flex-col gap-4">
                <p className="error-msg font-bold text-[22px]">Oops, Something went wrong... <Frown className="size-8" /></p>
                <button className="retry p-2 bg-[#000] rounded bg-opacity-[40%] text-white" onClick={() => navigate(0)}>Retry</button>
            </div>
        </div>
    );
}
