import {LensIcon} from "@/shared/ui/input/icons";
import {Input} from "@/shared/ui/input";

export const HomePage = () => {
    return (
        <div>
            <p>Where to next?</p>
            <Input placeholder={'Search countries...'} icon={<LensIcon/>}/>
        </div>
    );
};

