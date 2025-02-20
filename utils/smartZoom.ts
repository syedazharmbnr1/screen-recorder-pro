// Smart Zoom Utility for Screen Recording
export interface ZoomConfig {
  sensitivity: number
  maxZoom: number
  minZoom: number
}

export class SmartZoom {
  private config: ZoomConfig

  constructor(config?: Partial<ZoomConfig>) {
    this.config = {
      sensitivity: config?.sensitivity ?? 0.5,
      maxZoom: config?.maxZoom ?? 2.0,
      minZoom: config?.minZoom ?? 1.0
    }
  }

  calculateZoom(motionIntensity: number): number {
    // Basic zoom calculation based on motion intensity
    const zoomFactor = 1 + (motionIntensity * this.config.sensitivity)
    return Math.min(
      Math.max(zoomFactor, this.config.minZoom),
      this.config.maxZoom
    )
  }

  generateZoomTransform(zoomLevel: number, targetX: number, targetY: number): string {
    return `scale(${zoomLevel}) translate(${-targetX}px, ${-targetY}px)`
  }
}