import { useSelector } from 'react-redux'
import { useRef, useEffect } from 'react'
import { MiniStationList } from "../cmps/MiniStationList"
import { loadStations } from '../store/actions/station.actions'
import { FeaturedPlaylist } from '../cmps/FeaturedPlaylist'


export function HomePage() {
    const stations = useSelector(storeState => storeState.stationModule.stations)

    if (!stations) return <div>Loading...</div>
    return (
        <>
            <section  className="home-container">
                <MiniStationList stations={stations.slice(0,8)}/>
                <FeaturedPlaylist title={'Top playlists'} from={0} to={7} type={'playlist'}/> 
                <FeaturedPlaylist title={'Recommanded for you'} from={7} to={14} type={'playlist'}/>
                <FeaturedPlaylist title={'Your favorite artists'} from={0} to={7} type={'artist'} isRound={true}/>
                <FeaturedPlaylist title={'Mood'} from={14} to={21} type={'playlist'}/>
            </section>
        </>
    )
}

