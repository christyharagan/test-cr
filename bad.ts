import Banner from '@ddsweb/banner';

Const SimpleBanner = (props) => {

Return <Banner 
	headline={props.title} 
	
	image={{
	    alt: props.image.alt
	    large: props.image.src,
	 }}
	/>
};