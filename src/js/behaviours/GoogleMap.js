import Behaviour from '@/core/Behaviour'
import GoogleMapsLoader from 'google-maps'
GoogleMapsLoader.KEY = 'AIzaSyDHT-BPwwiC0EhoXkMw2R9Qph6OTSHzAdY'

export default class GoogleMap extends Behaviour {
	mount = () => {
		typeof google === 'undefined'
			? GoogleMapsLoader.load(this.loadMap)
			: this.loadMap()
	}

	loadMap = () => {
		// const { lat: latTmp, lng: lngTmp } = this.$el.dataset
		const mapOptions = {
			zoom: 15,
			center: new google.maps.LatLng(51.5059235, -0.1508861),
			styles: [
				{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [
						{
							color: '#a0d6d1'
						},
						{
							lightness: 17
						}
					]
				},
				{
					featureType: 'landscape',
					elementType: 'geometry',
					stylers: [
						{
							color: '#ffffff'
						},
						{
							lightness: 20
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#dedede'
						},
						{
							lightness: 17
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#dedede'
						},
						{
							lightness: 29
						},
						{
							weight: 0.2
						}
					]
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry',
					stylers: [
						{
							color: '#dedede'
						},
						{
							lightness: 18
						}
					]
				},
				{
					featureType: 'road.local',
					elementType: 'geometry',
					stylers: [
						{
							color: '#ffffff'
						},
						{
							lightness: 16
						}
					]
				},
				{
					featureType: 'poi',
					elementType: 'geometry',
					stylers: [
						{
							color: '#f1f1f1'
						},
						{
							lightness: 21
						}
					]
				},
				{
					elementType: 'labels.text.stroke',
					stylers: [
						{
							visibility: 'on'
						},
						{
							color: '#ffffff'
						},
						{
							lightness: 16
						}
					]
				},
				{
					elementType: 'labels.text.fill',
					stylers: [
						{
							saturation: 36
						},
						{
							color: '#333333'
						},
						{
							lightness: 40
						}
					]
				},
				{
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'transit',
					elementType: 'geometry',
					stylers: [
						{
							color: '#f2f2f2'
						},
						{
							lightness: 19
						}
					]
				},
				{
					featureType: 'administrative',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#fefefe'
						},
						{
							lightness: 20
						}
					]
				},
				{
					featureType: 'administrative',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#fefefe'
						},
						{
							lightness: 17
						},
						{
							weight: 1.2
						}
					]
				}
			],

			mapTypeId: google.maps.MapTypeId.ROADMAP,
			panControl: false,
			zoomControl: true,
			scaleControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			scrollwheel: false,
			draggable: true,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
				position: google.maps.ControlPosition.TOP_RIGHT
			},
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.TOP_RIGHT
			}
		}

		const map = new google.maps.Map(document.getElementById('map'), mapOptions)

		const image = {
			url: '/dist/img/svg/sg-mark.svg',
			// This marker is 20 pixels wide by 32 pixels high.
			size: new google.maps.Size(40, 40),
			// The origin for this image is (0, 0).
			origin: new google.maps.Point(0, 0),
			// The anchor for this image is the base of the flagpole at (0, 32).
			anchor: new google.maps.Point(0, 40)
		}

		const marker = new google.maps.Marker({
			map,
			position: new google.maps.LatLng(51.5059235, -0.1508861),
			icon: image,
			draggable: false
		})

		log(marker)
	}
}
