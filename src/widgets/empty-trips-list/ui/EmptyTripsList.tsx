import s from './EmptyTripsList.module.scss'
import {DragAndDropIcon, SuitcaseIcon, MapIcon, DownloadIcon} from "@/widgets/empty-trips-list/icons";
import {ShareIcon} from "@/widgets/side-bar/icons";
import {Button} from "@/shared/ui/button";

type EmptyTripsListProps = {
    openModal: () => void
}

export const EmptyTripsList = ({openModal}: EmptyTripsListProps) => {
    return (
        <>
            <p className={s.pageTitle}>My Trips</p>
            <div className={s.emptyPageContent}>
                <div className={s.emptyListIcon}>
                    <SuitcaseIcon className={s.emptyListIconSvg}/>
                </div>
                <div className={s.pageInfo}>
                    <p className={s.pageSubTitle}>No trips yet</p>
                    <p className={s.pageDesc}>Start planning your first adventure. Search for a country, add
                        destinations,
                        and
                        build your perfect itinerary.</p>
                </div>
                <Button className={s.createNewTripBtn} onClick={openModal}>
                    <MapIcon className={s.tripBtnIcon}/>
                    <p>ADD YOUR FIRST TRIP</p>
                </Button>
                <div className={s.btnsWrapper}>
                    <Button className={s.btnTripContr}>
                        <DragAndDropIcon className={s.btnIcon}/>
                        <p className={s.btnTitle}>Drag & drop stop reordering</p>
                    </Button>
                    <Button className={s.btnTripContr}>
                        <DownloadIcon className={s.btnIcon}/>
                        <p className={s.btnTitle}>Export itinerary as PDF</p>
                    </Button>
                    <Button className={s.btnTripContr}>
                        <ShareIcon className={s.btnIcon}/>
                        <p className={s.btnTitle}>Share via link — no account</p>
                    </Button>
                </div>
            </div>
        </>
    );
};

