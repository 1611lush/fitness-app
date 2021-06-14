import * as React from 'react';


interface CardProps {
	//title: string,
	//serv: any
}


const Card: React.FC<CardProps> = (props: CardProps) => {

	
	

  	return(
  	

        <form>
        	
        	<div className="gender">
	        	<h3 className="input__heading">
	        		Genger
	        	</h3>
				<div className="gender__item gender__item_male">
					<input id="male" type="radio" name="gender" value="male" defaultChecked  />
					<label htmlFor="male">Male</label>
				</div>
				<div className="gender__item gender__item_female">
					<input id="female" type="radio" name="gender" value="female" />
					<label htmlFor="female">Female</label>
				</div>
			</div>
			<div className="parameters">
				<h3 className="input__heading">
	        		Parameters
	        	</h3>
                <div className="input__heading">
                  <label className="heading" htmlFor="age">
                    Age
                  </label> 
                  <input type="text" id="age" name="age" placeholder="0" inputMode="decimal" maxLength={3} required />
                </div>
                <div className="input__heading">
                  <label className="heading" htmlFor="height">
                    Height
                  </label> 
                  <input type="text" id="height" name="height" placeholder="0" inputMode="decimal" maxLength={3} required />
                </div>
                <div className="input__heading">
                  <label className="heading" htmlFor="weight">
                    Weight
                  </label> 
                  <input type="text" id="weight" name="weight" placeholder="0" inputMode="decimal" maxLength={3} required />
                </div>
            </div>
            <div className="activity">
            	<h3 className="input__heading">
	        		Physical activity
	        	</h3>
				<div className="activity__item">
					<input id="zero" type="radio" name="activity" value="zero" defaultChecked  />
					<label htmlFor="zero">Minimal (Sedentary work and no physical activity)</label>
				</div>

				<div className="activity__item">
					<input id="low" type="radio" name="activity" value="low" />
					<label htmlFor="low">Low (Rare, irregular training, activity in everyday life)</label>
				</div>

				<div className="activity__item">
					<input id="medium" type="radio" name="activity" value="medium" />
					<label htmlFor="medium">Average (Training 3-5 times a week)</label>
				</div>

				<div className="activity__item">
					<input id="hight" type="radio" name="activity" value="hight" />
					<label htmlFor="hight">High (Training 6-7 times a week)</label>
				</div>

				<div className="activity__item">
					<input id="expert" type="radio" name="activity" value="expert" />
					<label htmlFor="expert">Very high (More than 6 workouts per week and physical work)</label>
				</div>
			</div>
			<button type='submit'>Submit</button>
		</form>
      
        



	
	)          

}

export default Card