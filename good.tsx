import Banner from '@ddsweb/banner';

const SimpleBanner3 = (props) => {
	return <Banner 
	headline={ props.title }
	image = {{
		alt: props.image.alt
		large: props.image.src,
	 }
}
/>
};