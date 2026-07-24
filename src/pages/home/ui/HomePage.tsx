import {Input} from "@/shared/ui/input/Input.tsx";
import {LensIcon} from "@/shared/ui/input/icons";

export const HomePage = () => {
    return (
        <div>
            <p>Where to next?</p>
            <Input placeholder={'Search countries...'} icon={<LensIcon/>}/>
        </div>
    );
};

