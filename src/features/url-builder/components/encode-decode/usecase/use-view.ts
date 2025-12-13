import { useState } from "react"

export type OperationType = 'encode' | 'decode';

export const useView = () => {
  const [operation, setOperation] = useState<OperationType>('encode');

  const handleChangeOperation = (operation: OperationType) => {
    setOperation(operation);
  }

  return {operation, handleChangeOperation}
}