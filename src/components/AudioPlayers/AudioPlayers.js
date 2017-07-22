import React from 'react';

import './audio_players.css';
import alien_synth_melody from '../../alien_sounds/alien_synth_melody.mp3';
import alien_saucer_rattle from '../../alien_sounds/alien_saucer_rattle.mp3';
import wit_woo from '../../alien_sounds/wit_woo.mp3';
import boo from '../../alien_sounds/boo.mp3';

const AudioPlayers = function(props) {
		console.log('props.alienWisdomMessageMp3'  + props.alienWisdomMessageMp3);	

		return (<div>
					<audio id ='audio_player_0'>
						<source id='src_mp3_0' type='audio/mp3' src={alien_synth_melody} />
						<source id='src_ogg_0' type='audio/ogg' src={alien_synth_melody} />
						<object id='audio_object_0' type='audio/x-mpeg' width='200px' height='45px' >
							<param id = 'param_src_0' name='src' value={alien_synth_melody} />
							<param id = 'param_src_0' name='src' value={alien_synth_melody} />
							<param name='autoplay' value='false' />
							<param name='autostart' value='false' />
						</object>
					</audio>

					<audio id ='audio_player_1'>
						<source id='src_mp3_1' type='audio/mp3' src={alien_saucer_rattle}/>
						<source id='src_ogg_1' type='audio/ogg' src={alien_saucer_rattle} />
						<object id='audio_object1' type='audio/x-mpeg' width='200px' height='45px' >
							<param id = 'param_src_1' name='src' value={alien_saucer_rattle} />
							<param id = 'param_src_1' name='src' value={alien_saucer_rattle} />
							<param name='autoplay' value='false' />
							<param name='autostart' value='false' />
						</object>
					</audio>
					
					<audio id ='audio_player_2'>
						<source id='src_mp3_2' type='audio/mp3' src={props.alienWisdomMessageMp3}/>
						<source id='src_ogg_2' type='audio/ogg' src={props.alienWisdomMessageMp3}/>
						<object id='audio_object_2' type='audio/x-mpeg' width='200px' height='45px' >
							<param id = 'param_src_2' name='src' value={props.alienWisdomMessageMp3} />
							<param id = 'param_src_2' name='src' value={props.alienWisdomMessageMp3}/>
							<param name='autoplay' value='false' />
							<param name='autostart' value='false' />
						</object>
					</audio>
				
					<audio id ='audio_player_3'>
						<source id='src_mp3_3' type='audio/mp3' src={wit_woo} />
						<source id='src_ogg_3' type='audio/ogg' src={wit_woo} />
						<object id='audio_object_3' type='audio/x-mpeg' width='200px' height='45px' >
							<param id = 'param_src_3' name='src' value={wit_woo} />
							<param id = 'param_src_3' name='src' value={wit_woo} />
							<param name='autoplay' value='false' />
							<param name='autostart' value='false' />
						</object>
					</audio>
					<audio id ='audio_player_4'>
						<source id='src_mp3_4' type='audio/mp3' src={boo} />
						<source id='src_ogg_4' type='audio/ogg' value={boo} />
						<object id='audio_object_4' type='audio/x-mpeg' width='200px' height='45px' >
							<param id = 'param_src_4' name='src' value={boo} />
							<param id = 'param_src_4' name='src' value={boo} />
							<param name='autoplay' value='false' />
							<param name='autostart' value='false' />
						</object>
					</audio>

			</div>
		);
 
}

export default AudioPlayers;
