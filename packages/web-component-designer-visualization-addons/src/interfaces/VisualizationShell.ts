import { IBindableObjectsBrowser } from "@gokturk413/web-component-designer";

export interface VisualizationShell {
  openConfirmation(element: HTMLElement, options:
    {
      x?: number,
      y?: number,
      width?: number,
      height?: number,
      parent?: HTMLElement,
      abortSignal?: AbortSignal,
      disableResize?: boolean,
      confirmText?: string,
      cancelText?: string
    }): Promise<boolean>;

  createBindableObjectBrowser: () => IBindableObjectsBrowser
}