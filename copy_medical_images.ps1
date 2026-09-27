# Copy Smart Medical Equipment Management screenshots to the project assets folder
# Run this script in PowerShell to copy the images locally

$srcDir = "C:\Users\mina\.gemini\antigravity\brain\d84b9724-c410-4a2a-b458-fccd78dad33d"
$dstDir = "c:\Users\mina\Downloads\jules_session_7526279495945170589\assets\images\projects\medical"
$dstDirPortfolio = "c:\Users\mina\Downloads\jules_session_7526279495945170589\portfolio\assets\images\projects\medical"

# Create destination directories if they don't exist
if (-not (Test-Path $dstDir)) {
    New-Item -ItemType Directory -Path $dstDir -Force
}
if (-not (Test-Path $dstDirPortfolio)) {
    New-Item -ItemType Directory -Path $dstDirPortfolio -Force
}

# Copy all 9 medical app screenshots
Copy-Item "$srcDir\media__1790503578135.png" "$dstDir\med_1.png" -Force
Copy-Item "$srcDir\media__1790503585066.png" "$dstDir\med_2.png" -Force
Copy-Item "$srcDir\media__1790503593963.png" "$dstDir\med_3.png" -Force
Copy-Item "$srcDir\media__1790503601799.png" "$dstDir\med_4.png" -Force
Copy-Item "$srcDir\media__1790504104922.png" "$dstDir\med_5.png" -Force
Copy-Item "$srcDir\media__1790504129863.png" "$dstDir\med_6.png" -Force
Copy-Item "$srcDir\media__1790504129911.png" "$dstDir\med_7.png" -Force
Copy-Item "$srcDir\media__1790504129921.png" "$dstDir\med_8.png" -Force
Copy-Item "$srcDir\media__1790504147548.png" "$dstDir\med_9.png" -Force

Copy-Item "$srcDir\media__1790503578135.png" "$dstDirPortfolio\med_1.png" -Force
Copy-Item "$srcDir\media__1790503585066.png" "$dstDirPortfolio\med_2.png" -Force
Copy-Item "$srcDir\media__1790503593963.png" "$dstDirPortfolio\med_3.png" -Force
Copy-Item "$srcDir\media__1790503601799.png" "$dstDirPortfolio\med_4.png" -Force
Copy-Item "$srcDir\media__1790504104922.png" "$dstDirPortfolio\med_5.png" -Force
Copy-Item "$srcDir\media__1790504129863.png" "$dstDirPortfolio\med_6.png" -Force
Copy-Item "$srcDir\media__1790504129911.png" "$dstDirPortfolio\med_7.png" -Force
Copy-Item "$srcDir\media__1790504129921.png" "$dstDirPortfolio\med_8.png" -Force
Copy-Item "$srcDir\media__1790504147548.png" "$dstDirPortfolio\med_9.png" -Force

Write-Host "Done! All 9 Smart Medical Equipment screenshots copied successfully." -ForegroundColor Green
