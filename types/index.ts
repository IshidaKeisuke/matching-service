export type User = {
	id: number;
	line_id: number;
	name: string;
	prefecture: string;
	address: string;
	birthday: Date;
	image: string;
	phone_number: string;
	role: "user" | "worker" | "non";
	created_at: Date;
	updated_at: Date;
}

export type Shift = {
	id: number;
	userId: number;
	startTime: Date;
	endTime: Date;
	createdAt: Date;
	isBooked: boolean;
}
  
export type ShiftListProps = {
	shifts: Shift[];
	onShiftClick: (shift: Shift) => void;
}
  
export type Message = {
	id: string;
	senderId: string;
	receiverId: string;
	content: string;
	createdAt: string;
};
  