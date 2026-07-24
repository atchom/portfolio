# ============================================================
# CV Doctor — Deployment script
# Run this in PowerShell from C:\Minimax\portfolio-main
# ============================================================

# 1. Check if remote already exists
$existingRemote = git remote get-url origin 2>&1
if ($existingRemote -match "github.com") {
    Write-Host "✓ Remote already configured: $existingRemote" -ForegroundColor Green
    $skipAdd = $true
} else {
    $skipAdd = $false
}

# 2. Add remote (if needed)
if (-not $skipAdd) {
    Write-Host ""
    Write-Host "Adding remote origin..." -ForegroundColor Cyan
    # Try the most likely repo names
    $repoOptions = @(
        "https://github.com/atchom/portfolio-main.git",
        "https://github.com/atchom/portfolio.git"
    )

    Write-Host ""
    Write-Host "Which GitHub repo should we push to?" -ForegroundColor Yellow
    Write-Host "  1) atchom/portfolio-main"
    Write-Host "  2) atchom/portfolio"
    Write-Host "  3) Other (you'll type the URL)"
    $choice = Read-Host "Enter 1, 2, or 3"

    switch ($choice) {
        "1" { $repoUrl = "https://github.com/atchom/portfolio-main.git" }
        "2" { $repoUrl = "https://github.com/atchom/portfolio.git" }
        "3" {
            $repoUrl = Read-Host "Enter the full repo URL (e.g. https://github.com/atchom/myrepo.git)"
        }
        default {
            Write-Host "Invalid choice, defaulting to portfolio-main" -ForegroundColor Red
            $repoUrl = "https://github.com/atchom/portfolio-main.git"
        }
    }

    git remote add origin $repoUrl
    Write-Host "✓ Remote added: $repoUrl" -ForegroundColor Green
}

# 3. Show status before push
Write-Host ""
Write-Host "=== Current status ===" -ForegroundColor Cyan
git status
Write-Host ""
Write-Host "Last commit:" -ForegroundColor Cyan
git log -1 --oneline

# 4. Confirm before push
Write-Host ""
Write-Host "=== Ready to push ===" -ForegroundColor Yellow
$confirm = Read-Host "Push to GitHub? (yes/no)"
if ($confirm -ne "yes") {
    Write-Host "Aborted. Run this script again when ready." -ForegroundColor Red
    exit
}

# 5. Push
Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Push successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Go to your GitHub repo settings > Pages"
    Write-Host "  2. Confirm source is 'GitHub Actions'"
    Write-Host "  3. Wait 1-2 minutes for the workflow to deploy"
    Write-Host "  4. Your site will be live at:"
    Write-Host "     - https://atchom.github.io/portfolio-main/ (if repo is portfolio-main)"
    Write-Host "     - https://atchom.github.io/portfolio/ (if repo is portfolio)"
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "✗ Push failed." -ForegroundColor Red
    Write-Host "Common causes:"
    Write-Host "  - Repository doesn't exist on GitHub (create it first at github.com/new)"
    Write-Host "  - Authentication required (you may need to set up a Personal Access Token)"
    Write-Host "  - Wrong repo URL"
    Write-Host ""
    Write-Host "For authentication, see: https://docs.github.com/en/authentication"
}
