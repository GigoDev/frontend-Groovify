import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TrackList } from '../../cmps/TrackList'

import { loadStation, clearStation } from '../../store/actions/station.actions'

export function ArtistDetails() {

  const { id } = useParams()
  const station = useSelector(storeState => storeState.stationModule.station)


  useEffect(() => {
    loadStation(id) // get station on load / when id changed

    return clearStation() // clear station when unmount
  }, [id])

  function onPlay(ev, track) {
    ev.stopPropagation()
    setTrack(track)
    togglePlaying()
  }

  function onAddTrack() {
    console.log('add')
  }

  if (!station) return <h1>Loading...</h1>
  const { imgs, listeners, name: title, type, tracks } = station
  return (
    <section className="station-details-container">

      <div className='hero'>
        <img src={imgs[0].url} alt="hero img" />
      </div>

      <div className='hero-info'>
        <div className='title'>{title}</div>
        <div className='listeners'><span>{listeners.toLocaleString()}</span> monthly listeners</div>
      </div>

      <section className='station-content'>
        <div className='controlls'>
          <button className='btn play'>
            <svg role="img" fill="black" height="20" width="20" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.12L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
          </button>
          <button className='btn pill follow'>Follow</button>
        </div>

        <h2>Popular</h2>
        <TrackList tracks={tracks} onAddTrack={onAddTrack} onPlay={onPlay} />
      </section>
    </section>
  )
}