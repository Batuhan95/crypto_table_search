import React from "react";

const Form = props => (
        <div>
            <form onSubmit={props.getCoin}>
		    <input type="text" name="coin" placeholder="eg: BTC.."/>
		    <input type="text" name="currency" placeholder="eg: USD..."/>
		    <button>Get Coin</button>
	        </form>
        </div>
    );

export default Form;