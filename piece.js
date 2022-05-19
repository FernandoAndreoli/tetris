class Piece {
    constructor(shape, ctx) {
        this.shape = shape
        this.ctx = ctx
        this.x = 0
        this.y = Math.floor(COLS / 2)
    }
    renderPiece() {
        this.shape.map((row, i) => {
            row.map((cell, j) => {
                if (cell > 0) {
                    this.ctx.fillStyle = COLORS[cell]
                    this.ctx.fillRect(this.x + j, this.y + i, 1, 1)
                }
            })
        })
    }
}