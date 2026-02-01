import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute, useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Iconos } from "./Iconos";

interface TypeInputLabel {
  onChangeValue: (value: string) => void;
  Value?: string;
  Type?: HTMLInputTypeAttribute;
  className_input?: string;
  className_container?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export default function InputLabel({
  onChangeValue,
  Value,
  Type,
  className_input,
  className_container,
  label,
  placeholder,
  disabled,
}: TypeInputLabel) {
  const [ShowPass, setShowPass] = useState<boolean>(false);
  return (
    <Field className={cn("flex flex-col gap-2", className_container)}>
      {label && <FieldLabel className="text-black text-xs">{label}</FieldLabel>}
      <InputGroup className=" rounded-xl ">
        <InputGroupInput
          disabled={disabled}
          placeholder={placeholder ?? ""}
          className={cn("", className_input)}
          value={Value ?? ""}
          onChange={(e) => {
            onChangeValue(e.target.value);
          }}
          type={
            Type
              ? Type == "password"
                ? ShowPass
                  ? "text"
                  : "password"
                : Type
              : "text"
          }
        />
        {(Type == "password" || ShowPass) && (
          <InputGroupAddon
            className="cursor-pointer"
            onClick={() => setShowPass(!ShowPass)}
            align={"inline-end"}
          >
            {ShowPass ? <Iconos.RegEyeSlash /> : <Iconos.RegEye />}
          </InputGroupAddon>
        )}
      </InputGroup>
    </Field>
  );
}
