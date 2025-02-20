// Cursor tracking utility for screen recording
export interface CursorPosition {
  x: number
  y: number
  timestamp: number
}

export class CursorTracker {
  private positions: CursorPosition[] = []
  private isTracking = false

  startTracking() {
    this.positions = []
    this.isTracking = true
    document.addEventListener('mousemove', this.trackCursor)
  }

  stopTracking() {
    this.isTracking = false
    document.removeEventListener('mousemove', this.trackCursor)
  }

  private trackCursor = (event: MouseEvent) => {
    if (this.isTracking) {
      this.positions.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
      })
    }
  }

  getCursorPositions(): CursorPosition[] {
    return this.positions
  }

  clearPositions() {
    this.positions = []
  }
}