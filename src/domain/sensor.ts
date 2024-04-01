
type SensorID = string;



/**
 * Sensor representation
 */
export class Sensor {
	sensorId: SensorID;
	name: string;
	
	constructor(
		public id: SensorID,
		public type: string,
		public location: Location,
		public signalStrength: SignalStrength,
	) {}
}


export enum SignalStrength {
	LOW = 0,
	MEDIUM = 1,
	HIGH = 2,
}

/**
 * Location for a sensor
 */
export interface Location {
	x: number;
	y: number;
	z: number;
}
