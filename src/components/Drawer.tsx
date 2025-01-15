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
}
function DrawerDemo({ children, onClick }: DraweTypesprops) {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={onClick}>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="fixed right-0 top-0 h-screen w-96 rounded-none">
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
           <div>{children}</div>
          <DrawerFooter>
            <Button>Submit</Button>
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