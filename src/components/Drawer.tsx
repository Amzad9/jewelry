import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

type DraweTypesprops = {
   children: React.ReactNode
   onClick?: React.MouseEventHandler<HTMLButtonElement>
   title?: string
   subTitle?: string
}
function DrawerDemo({ children, onClick, title, subTitle }: DraweTypesprops) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={onClick}>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="fixed right-0 h-screen w-96 rounded-none">
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{subTitle}</DrawerDescription>
          </DrawerHeader>
           <div className="px-4">{children}</div>
          <DrawerFooter>
            {/* <Button>Submit</Button> */}
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default DrawerDemo