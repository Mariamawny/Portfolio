# Copy Uni2Career screenshots to the project assets folder
# Run this script in PowerShell to copy the images locally

$srcDir = "C:\Users\mina\.gemini\antigravity\brain\4c5145da-0c65-4a62-af58-6c262d147226"
$dstDir = "c:\Users\mina\Downloads\jules_session_7526279495945170589\assets\images\projects\uni2career"

# Create destination directory if it doesn't exist
if (-not (Test-Path $dstDir)) {
    New-Item -ItemType Directory -Path $dstDir -Force
}

# Copy files
Copy-Item "$srcDir\media__1790500732704.png" "$dstDir\uc_1.png" -Force
Copy-Item "$srcDir\media__1790500732715.png" "$dstDir\uc_2.png" -Force
Copy-Item "$srcDir\media__1790500732723.png" "$dstDir\uc_3.png" -Force
Copy-Item "$srcDir\media__1790500732731.png" "$dstDir\uc_4.png" -Force

Write-Host "Done! Uni2Career screenshots copied successfully." -ForegroundColor Green
