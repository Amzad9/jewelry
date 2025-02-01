import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type DrawerTypesProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  subTitle?: string;
  open?: boolean;
  setOpen?: () => void;
};

function DrawerDemo({
  children,
  open,
  setOpen,
  title = "Default Title",
  subTitle = "",
}: DrawerTypesProps) {
  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="fixed right-0 h-screen w-96 rounded-none">
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            {subTitle && <DrawerDescription>{subTitle}</DrawerDescription>}
          </DrawerHeader>
          <div className="px-4">{children}</div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerDemo;
