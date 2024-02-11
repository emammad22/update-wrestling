import { cn } from "@/common/lib/utils"
import { useFormContext } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/common/components/ui/form"
import { Input } from "@/common/components/ui/input"
import { Params } from "react-router-dom"
import { Cake, Check, Wand } from "lucide-react"
import { Button } from "@/common/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/common/components/ui/sheet"
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
import { Stage, WrestlingType } from "../types"


export default function Filter() {
  const form = useFormContext()

  const onSubmit = (values: Partial<Params>) => {
    console.log('form submited', values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 items-center">
        <FormField
          control={form.control}
          name="wrestler_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Wrestler" {...field} className="max-w-xs" />
              </FormControl>
            </FormItem>
          )}
        />
        {/* More Filter */}
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <Cake className="cursor-pointer text-red-500" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Detailed Filter</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Author" {...field} className="max-w-xs" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="check_author"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Check Author" {...field} className="max-w-xs" />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Select Boxes */}

              <FormField
                control={form.control}
                name="wrestling_type"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
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
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stage"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
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
                              ? Object.values(Stage).find(
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
                            {Object.values(Stage).map((type) => (
                              <CommandItem
                                value={type}
                                key={type}
                                onSelect={() => {
                                  form.setValue("stage", type)
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
                  </FormItem>
                )}
              />
            </div>
          </SheetContent>
        </Sheet>
      </form>
    </Form>
  )
}
