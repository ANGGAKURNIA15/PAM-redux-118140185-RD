import { ON, OFF } from "./tipe";
export const turnOn = () => ({
  type: ON,
  data: ON,
});
export const turnOff = () => ({
  type: OFF,
  data: OFF,
});
