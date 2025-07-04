/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export declare class Image {
  readonly width: number
  readonly height: number
  cropSync(x: number, y: number, width: number, height: number): Image
  crop(x: number, y: number, width: number, height: number): Promise<Image>
  toPngSync(copyOutputData?: boolean | undefined | null): Buffer
  toPng(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  toJpegSync(copyOutputData?: boolean | undefined | null): Buffer
  toJpeg(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  toBmpSync(copyOutputData?: boolean | undefined | null): Buffer
  toBmp(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  toRawSync(copyOutputData?: boolean | undefined | null): Buffer
  toRaw(copyOutputData?: boolean | undefined | null): Promise<Buffer>
  getPixelRgba(x: number, y: number): number
}
export declare class Monitor {
  /** List all monitors */
  static all(): Array<Monitor>
  /** Get the monitor by point */
  static fromPoint(x: number, y: number): Monitor | null
  /** Unique identifier associated with the screen. */
  id(): number
  /** Unique identifier associated with the screen. */
  name(): string
  /** The screen x coordinate. */
  x(): number
  /** The screen x coordinate. */
  y(): number
  /** The screen pixel width. */
  width(): number
  /** The screen pixel height. */
  height(): number
  /** Can be 0, 90, 180, 270, represents screen rotation in clock-wise degrees. */
  rotation(): number
  /** Output device's pixel scale factor. */
  scaleFactor(): number
  /** The screen refresh rate. */
  frequency(): number
  /** Whether the screen is the main screen */
  isPrimary(): boolean
  /** Whether the screen is builtin */
  isBuiltin(): boolean
  /** Capture image of the monitor synchronously */
  captureImageSync(): Image
  /** Capture image of the monitor asynchronously */
  captureImage(): Promise<Image>
}
export declare class Window {
  /** List all windows, sorted by z coordinate. */
  static all(): Array<Window>
  /** The window id */
  id(): number
  /** The window process id */
  pid(): number
  /** The window app name */
  appName(): string
  /** The window title */
  title(): string
  /** The window current monitor */
  currentMonitor(): Monitor
  /** The window x coordinate. */
  x(): number
  /** The window y coordinate. */
  y(): number
  /** The window z coordinate. */
  z(): number
  /** The window pixel width. */
  width(): number
  /** The window pixel height. */
  height(): number
  /** The window is minimized. */
  isMinimized(): boolean
  /** The window is maximized. */
  isMaximized(): boolean
  /** The window is focused. */
  isFocused(): boolean
  /** capture the window image synchronously */
  captureImageSync(): Image
  /** capture the window image asynchronously */
  captureImage(): Promise<Image>
}
