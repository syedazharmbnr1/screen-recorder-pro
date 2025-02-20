export interface RecordingSettings {
  video: {
    quality: 'high' | 'medium' | 'low'
    fps: number
    resolution: {
      width: number
      height: number
    }
  }
  audio: {
    enabled: boolean
    source: 'microphone' | 'system' | 'both'
    volume: number
  }
  features: {
    webcam: boolean
    webcamPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    smartZoom: boolean
    smartZoomSensitivity: number
    cursorHighlight: boolean
    clickEffect: boolean
    transcription: boolean
    transcriptionLanguage: string
  }
}