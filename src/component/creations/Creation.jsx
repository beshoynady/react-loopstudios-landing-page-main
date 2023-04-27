import React from 'react'
import earth from '../../images/desktop/image-deep-earth.jpg'
import arcade from '../../images/desktop/image-night-arcade.jpg'
import team from '../../images/desktop/image-soccer-team.jpg'
import grid from '../../images/desktop/image-grid.jpg'
import From_up from '../../images/desktop/image-from-above.jpg'
import Pocket from '../../images/desktop/image-pocket-borealis.jpg'
import curiosity from '../../images/desktop/image-curiosity.jpg'
import fisheye from '../../images/desktop/image-fisheye.jpg'
import earth_mob from '../../images/mobile/image-deep-earth.jpg'
import arcade_mob from '../../images/mobile/image-night-arcade.jpg'
import team_mob from '../../images/mobile/image-soccer-team.jpg'
import grid_mob from '../../images/mobile/image-grid.jpg'
import From_up_mob from '../../images/mobile/image-from-above.jpg'
import Pocket_mob from '../../images/mobile/image-pocket-borealis.jpg'
import curiosity_mob from '../../images/mobile/image-curiosity.jpg'
import fisheye_mob from '../../images/mobile/image-fisheye.jpg'
import './Creation.css'
const Creation = () => {
    const listImages=[
        {image: earth,
        image_Mob: earth_mob,
        title:'Deep earth'},
        {image: arcade,
        image_Mob:arcade_mob,
        title:'Night arcade'},
        {image: team,
        image_Mob:team_mob,
        title:'Soccer team VR'},
        {image: grid,
        image_Mob:grid_mob,
        title:'The grid'},
        {image: From_up,
        image_Mob:From_up_mob,
        title:'From up above VR'},
        {image: Pocket,
        image_Mob:Pocket_mob,
        title:'Pocket borealis'},
        {image: curiosity,
        image_Mob:curiosity_mob,
        title:'The curiosity'},
        {image: fisheye,
        image_Mob:fisheye_mob,
        title:'Make it fisheye'}
        ];
        console.log(listImages[0].image_Mob)
        const ele_width=window.innerWidth;
        console.log(ele_width)
    return (
        <section className='section-2'>
            <div className='container'>
                <div className="creation">
                    <div className='title'>
                        <h1>Our creations</h1>
                        <button>See all</button>
                    </div>
                    <div className='images'>
                        
                        {listImages.map((m, i)=>{
                            return(
                                <div key={i} className='image-creation' style={{
                                    backgroundImage:`url(${ele_width > 375 ? m.image : m.image_Mob})`}}>
                                        <h1>{m.title}</h1>
                                </div>
                        )}
                        )}
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Creation