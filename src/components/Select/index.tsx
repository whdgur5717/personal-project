import { Portal } from "@ark-ui/react/portal"
import { createListCollection, Select as SelectPrimitive } from "@ark-ui/react/select"

import { ChevronDownIcon } from "lucide-react"
import { select } from "@styled-system/recipes/select"
export const Select = <T extends string>({
  options,
  label,
  placeholder,
  onValueChange,
}: {
  options: T[]
  label: string
  placeholder: string
  onValueChange: (value: T) => void
}) => {
  const collection = { items: options.map(option => ({ value: option, label: option })) }

  const styles = select({ size: "lg" })

  return (
    <SelectPrimitive.Root
      positioning={{ sameWidth: true }}
      collection={createListCollection(collection)}
      onValueChange={e => onValueChange(e.value[0] as T)}
      className={styles.root}>
      <SelectPrimitive.Label className={styles.label}>{label}</SelectPrimitive.Label>
      <SelectPrimitive.Control className={styles.control}>
        <SelectPrimitive.Trigger className={styles.trigger}>
          <SelectPrimitive.ValueText
            placeholder={placeholder}
            className={styles.valueText}
          />
          <SelectPrimitive.Indicator className={styles.indicator}>
            <ChevronDownIcon />
          </SelectPrimitive.Indicator>
        </SelectPrimitive.Trigger>
      </SelectPrimitive.Control>
      <Portal>
        <SelectPrimitive.Positioner>
          <SelectPrimitive.Content className={styles.content}>
            <SelectPrimitive.ItemGroup className={styles.itemGroup}>
              {collection.items.map(item => (
                <SelectPrimitive.Item
                  key={item.value}
                  item={item}
                  className={styles.item}>
                  <SelectPrimitive.ItemText className={styles.itemText}>
                    {item.label}
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>✓</SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.ItemGroup>
          </SelectPrimitive.Content>
        </SelectPrimitive.Positioner>
      </Portal>
      <SelectPrimitive.HiddenSelect />
    </SelectPrimitive.Root>
  )
}
