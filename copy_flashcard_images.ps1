# Copy generated FlashCard screenshots to the project assets folder
# Run this script in PowerShell to copy the images

$srcDir = "C:\Users\mina\.gemini\antigravity\brain\4c5145da-0c65-4a62-af58-6c262d147226"
$dstDir = "c:\Users\mina\Downloads\jules_session_7526279495945170589\assets\images\projects\flashcard"

# Create destination directory if it doesn't exist
if (-not (Test-Path $dstDir)) {
    New-Item -ItemType Directory -Path $dstDir -Force
}

# Copy files
Copy-Item "$srcDir\flashcard_screen1_1790499911343.png" "$dstDir\fc_1.png" -Force
Copy-Item "$srcDir\flashcard_screen2_1790499921464.png" "$dstDir\fc_2.png" -Force
Copy-Item "$srcDir\flashcard_screen3_1790499940856.png" "$dstDir\fc_3.png" -Force
Copy-Item "$srcDir\flashcard_screen4_1790499951401.png" "$dstDir\fc_4.png" -Force

Write-Host "Done! FlashCard screenshots copied successfully." -ForegroundColor Green
