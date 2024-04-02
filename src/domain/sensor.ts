
type SensorID = string;



/**
 * Sensor representation
 */
export class Sensor {

	constructor(
		public id: SensorID,		
		public signalStrength: SignalStrength,
	) {
		this.id = id;
		this.signalStrength = signalStrength;
	}

	/**
	 * Set signal strength
	 * @param signalStrength New signal strength
	 */
	setSignalStrength(signalStrength: SignalStrength) {
		this.signalStrength = signalStrength;
	}
}


export enum SignalStrength {
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	HIGH = 'HIGH',
}
