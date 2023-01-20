def floodFill(image, sr, sc, color):
    ref = image[sr][sc]
    if ref == color:
        return image
    
    def BFS(x, y):
        image[x][y] = color
        if (x - 1 >= 0 and image[x - 1][y] == ref):
            BFS(x - 1, y)
        if (x + 1 < len(image) and image[x + 1][y] == ref):
            BFS(x + 1, y)
        if (y - 1 >= 0 and image[x][y - 1] == ref):
            BFS(x, y - 1)
        if (y + 1 < len(image[x]) and image[x][y + 1] == ref):
            BFS(x, y + 1)

    BFS(sr, sc)
    return image

print(floodFill([[1, 1, 1,], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
