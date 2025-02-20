// Screen Capture Utility
export interface ScreenCaptureOptions {
  audio?: boolean
  video?: boolean
  displaySurface?: 'browser' | 'window' | 'monitor'
}

export async function captureScreen(
  options: ScreenCaptureOptions = {}
): Promise<MediaStream> {
  const defaultOptions = {
    audio: true,
    video: true,
    displaySurface: 'monitor'
  }

  const mergedOptions = { ...defaultOptions, ...options }

  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        displaySurface: mergedOptions.displaySurface
      },
      audio: mergedOptions.audio
    })

    return stream
  } catch (error) {
    console.error('Screen capture error:', error)
    throw error
  }
}

export function stopMediaStream(stream: MediaStream) {
  stream.getTracks().forEach(track => track.stop())
}