import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface iAppProps {
    title: string;
    overview: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    age: number;
    duration: number
}

export default function PlayVideoModal({changeState, overview, youtubeUrl, state, title, age, duration, release,}: iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
                    <div className="flex gap-x-2 items-center">
                        <p>{release}</p>
                        <p className="border py-0.5 px-1 border-gray-200 rounded">{age}+</p>
                        <p>{duration}</p>
                    </div>
                </DialogHeader>
                <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
            </DialogContent>
        </Dialog>
    );
}