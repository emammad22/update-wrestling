import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/common/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/common/components/ui/popover"
import { WrestlingType } from "../../../pages/home/types/index";
import { cn } from "@/common/lib/utils"
import { Check, Wand } from "lucide-react";
import {
    FormControl,
} from "@/common/components/ui/form"
import { Button } from "@/common/components/ui/button"


export default function ComboboxSelect({ field }) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground"
                        )}
                    >
                        {field.value
                            ? Object.values(WrestlingType).find(
                                (type) => type === field.value
                            )
                            : "Select type"}
                        <Wand className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput
                        placeholder="Search framework..."
                        className="h-9"
                    />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {Object.values(WrestlingType).map((type) => (
                            <CommandItem
                                value={type}
                                key={type}
                                onSelect={() => {
                                    form.setValue("wrestling_type", type)
                                }}
                            >
                                {type}
                                <Check
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        type === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
}
