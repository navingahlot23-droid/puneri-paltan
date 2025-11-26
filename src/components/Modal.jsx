
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from "@heroicons/react/16/solid";

export default function Modal({open, onClose,children}) {
  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-99">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/40 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  justify-center p-4 text-center items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
            <div className="cursor-pointer absolute -top-2.5 -right-2.5 bg-white rounded-full">
                <XMarkIcon className='w-6 h-6' onClick={() => onClose(false)}/>
            </div>
               {children}
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
