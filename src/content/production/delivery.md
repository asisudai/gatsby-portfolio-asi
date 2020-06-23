---
title: "Delivery"
path: "/content/sections/"
mark: 7
---

# Package data for archive and delivery

It's common for a client to request assets, files and other data from the project. For the pipeline to collect this data into a package, it's key to know where the data is stored. For example Assets, rendered layers and scene file should always be in a known locations and with known naming conventions. But how can we do that with so many artists working on so many assets and shots? A. Setting conventions that artists have defined and easy to spot location to work in. B. Have artist go through tools that enforce those conventions. C. Separating WIP data such scene-files and Publish/Approved data such as approved nuke scripts into different location.

```python
# Once centralize module that serves file/folders paths. # Artist-end tools can use to avoid hard-coding paths
import path_template
print path_template.get_path('maya_wip_scene')
>>>"/projects/yosemite/assets/chr/yogi/workspace/maya/scene/yogi_{artist}_v{version:03d}.ma"
```
